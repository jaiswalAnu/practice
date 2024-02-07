db.items.find({rating:3.5})
db.items.find({price:22000})
db.items.find({rating:{$gte:3}})
db.items.deleteOne({price:22000})