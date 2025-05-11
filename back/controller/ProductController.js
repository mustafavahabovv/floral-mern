import FloraModel from "../model/ProductModel.js"

const getAllProducts = async (req, res) => {
    try {
        const products = await FloraModel.find()
        res.json(products)
    } catch (error) {
        res.json(error)
    }
}

const deleteProduct = async (req, res) => {
    try {
        const product = await FloraModel.findByIdAndDelete(req.params.id)
        res.json(product)
    } catch (error) {
        res.json(error)
    }
}

const postProduct = async (req, res) => {
    try {
        const product = await FloraModel.create(req.body)
        res.json(product)
    } catch (error) {
        res.json(error)
    }
}

export { getAllProducts, deleteProduct, postProduct }