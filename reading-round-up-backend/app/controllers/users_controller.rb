class UsersController < ApplicationController
    before_action :set_user, only: [:show]

    def create 
        @user = User.new(user_params)
        if @user.save 
            session[:user_id] = @user.id
            render json: UserSerializer.new(@user).serializable_hash.to_json
        else 
            response = {
                error: @user.errors.full_messages.to_sentence
            }
            render json: response
        end
    end 
    # def index 
    #     @users = User.all 

    #     render json: @users 
    # end 

    # json_string = MovieSerializer.new(movie).serializable_hash.to_json

    def show 
        user_json = UserSerializer.new(@user).serializable_hash.to_json
        render json: user_json
    end 

    private 
    def set_user
        @user = User.find(params[:id])
    end 

    def user_params
        params.require(:user).permit(:name, :username, :password)
    end 
end
