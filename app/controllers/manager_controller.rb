class ManagerController < ApplicationController
  before_action :authorize

  def index
    @contents = Content.all
  end

end