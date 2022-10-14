class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :author, :title, :body
  has_many :comments
end
