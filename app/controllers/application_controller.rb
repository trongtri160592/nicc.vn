class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :manage_category, :page_title

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  helper_method :current_user

  def authorize
    redirect_to '/admin' unless current_user
  end

  before_action :set_locale

  private
  def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
  end

  def default_url_options(options = {})
    { locale: I18n.locale }
  end

  protected
  def manage_category
    "homepage"
  end

  def page_title
    "Viện ung thư quốc gia"
  end
end
