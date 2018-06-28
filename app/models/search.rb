class Search
	# original SQL
	def self.query_report_sql(keyword = '')
	  @query_report_sql ||=
		%(SELECT * FROM (
			SELECT
				cancer_type.id AS searchable_id,
				'Cancer_type' AS searchable_type,
				cancer_type.name AS title,
				cancer_type.name_english as title_english,
				cancer_type.description AS description,
				cancer_type.description_english AS description_english,
				(MATCH(name, name_english) AGAINST ('#{keyword}') ) as relevance
			FROM cancer_type

			UNION

			SELECT
			  news.id AS searchable_id,
				'News' AS searchable_type,
				news.title AS title,
				news.title_english AS title_english,
				news.content AS description,
				news.content_english AS description_english,
				(MATCH(title, title_english) AGAINST ('#{keyword}') ) as relevance
			FROM news

			UNION

			SELECT
				research.id AS searchable_id,
				'Research' AS searchable_type,
				research.title AS title,
				research.title AS title_english,
				research.description AS description,
				research.description_english AS description_english,
				(MATCH(title) AGAINST ('#{keyword}') ) as relevance
			FROM research
			) as search where relevance > 0 ORDER BY relevance DESC
		)
	end

	# paginatable SQL
	def self.query_report_paginate_sql(keyword)
	  @query_report_paginate_sql ||=
		%(
		  SELECT *
		  FROM (#{query_report_sql(keyword)}) AS paginatable
		  LIMIT :limit OFFSET :offset
		)
	end

	# count all records SQL
	def self.query_report_total_count_sql(keyword: '')
	  @query_report_total_count_sql ||=
		%(
		  SELECT COUNT(*) AS count
		  FROM (#{query_report_sql(keyword)}) AS paginatable
		)
	end

	def self.query_report(page: 1, per_page: 10, swKeyword: '')
	  @offset = offset(page, per_page)
	  records =
		Research.find_by_sql(
		  [
			query_report_paginate_sql(swKeyword),
			{
			  limit: per_page,
			  offset: @offset
			}
		  ]
		)
	  records
		.instance_variable_set(:@page, page)
	  records
		.instance_variable_set(:@per_page, per_page)
	  records
		.instance_variable_set(:@query_report_total_count_sql,
							   query_report_total_count_sql)

	  add_pagination_methods(records)

	  records
	end

	def self.add_pagination_methods(records)
	  records.instance_eval do
		def total_count
		  @total_count ||=
			CancerType
			.find_by_sql(@query_report_total_count_sql)
			.first
			.count
		end

		def total_pages
		  @total_pages ||= (total_count * 1.0 / @per_page).ceil.to_i
		end
		
		def offset
		  (@page - 1) * @per_page
		end
		
	  end
	end

	private

	def self.offset(page, per_page)
	  (page - 1) * per_page
	end

end