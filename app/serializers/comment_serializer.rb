class CommentSerializer < ActiveModel::Serializer
  attributes :id, :commentor, :body
  belongs_to :article
end
