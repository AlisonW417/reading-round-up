class BooksController < ApplicationController
    def index 
        if logged_in? 
            @books = current_user.books
            render json: BookSerializer.new(@books).serializable_hash.to_json
        else 
            render json: {
                message: "Log in to view books"
            }
        end
    end 

    def create 
        byebug
    end 
end
