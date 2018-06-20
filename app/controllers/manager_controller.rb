class ManagerController < ApplicationController
  before_action :authorize
  def index
    @cancer_types = CancerType.all.order('name').paginate(:page => params[:page], :per_page => 20)
  end

end