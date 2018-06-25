class SearchController < ApplicationController

def index
	search_results = ActiveRecord::Base.connection.execute("
	SELECT searchable_type, searchable_id, relevance FROM (
		 SELECT
			cancer_type.id AS searchable_id,
			'Cancer_type' AS searchable_type,
			cancer_type.name_english AS title,
			(MATCH(name, name_english) AGAINST ('ung') ) as relevance
		  FROM cancer_type

		  UNION

		  SELECT
			news.id AS searchable_id,
			'News' AS searchable_type,
			news.title_english AS title,
			(MATCH(title, title_english) AGAINST ('ung') ) as relevance
		  FROM news

		  UNION

		  SELECT
			research.id AS searchable_id,
			'Research' AS searchable_type,
			research.title AS title,
			(MATCH(title) AGAINST ('ung') ) as relevance
		  FROM research
		) as search where relevance > 0
	")
end

end