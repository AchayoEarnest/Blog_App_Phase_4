class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :author, :title, :body
end
