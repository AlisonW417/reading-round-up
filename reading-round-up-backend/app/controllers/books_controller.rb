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

    private 
    def book_params
        params.require(:book).permit(:title, :author, :date_finished, :notes, :user_id)
    end 
end
