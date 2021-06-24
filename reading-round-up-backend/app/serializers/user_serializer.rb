class UserSerializer
  include JSONAPI::Serializer
  
  attributes :name, :username
  has_many :books, serializer: BookSerializer
end
