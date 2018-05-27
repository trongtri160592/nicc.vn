class UserController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to '/admin'
    else
      redirect_to '/signup'
    end
  end

  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end
end