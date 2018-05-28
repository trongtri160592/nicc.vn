class ManagerController < ApplicationController
  before_action :authorize
  def index
    @cancer_types = CancerType.all.order('name')
  end

end