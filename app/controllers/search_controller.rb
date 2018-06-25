class SearchController < ApplicationController

  def result
    if I18n.locale == :vi
      @search_results = ActiveRecord::Base.connection.execute("
	      SELECT searchable_type, searchable_id, title, description, relevance FROM (
          SELECT
            cancer_type.id AS searchable_id,
            'Cancer_type' AS searchable_type,
            cancer_type.name AS title,
            cancer_type.description AS description,
            (MATCH(name, name_english) AGAINST ('#{params[:swKeyword]}') ) as relevance
          FROM cancer_type

          UNION

          SELECT
          news.id AS searchable_id,
            'News' AS searchable_type,
            news.title AS title,
            news.content AS description,
            (MATCH(title, title_english) AGAINST ('#{params[:swKeyword]}') ) as relevance
          FROM news

          UNION

          SELECT
            research.id AS searchable_id,
            'Research' AS searchable_type,
            research.title AS title,
            research.description AS description,
            (MATCH(title) AGAINST ('#{params[:swKeyword]}') ) as relevance
          FROM research
		    ) as search where relevance > 0 ORDER BY relevance DESC
      ").to_a.paginate(:page => params[:page], :per_page => 10)
    else
      @search_results = ActiveRecord::Base.connection.execute("
	      SELECT searchable_type, searchable_id, title, description, relevance FROM (
          SELECT
            cancer_type.id AS searchable_id,
            'Cancer_type' AS searchable_type,
            cancer_type.name_english AS title,
            cancer_type.description_english AS description,
            (MATCH(name, name_english) AGAINST ('#{params[:swKeyword]}') ) as relevance
          FROM cancer_type

          UNION

          SELECT
          news.id AS searchable_id,
            'News' AS searchable_type,
            news.title_english AS title,
            news.content_english AS description,
            (MATCH(title, title_english) AGAINST ('#{params[:swKeyword]}') ) as relevance
          FROM news

          UNION

          SELECT
            research.id AS searchable_id,
            'Research' AS searchable_type,
            research.title AS title,
            research.description_english AS description,
            (MATCH(title) AGAINST ('#{params[:swKeyword]}') ) as relevance
          FROM research
		    ) as search where relevance > 0 ORDER BY relevance DESC
      ").to_a.paginate(:page => params[:page], :per_page => 10)
    end
  end

end