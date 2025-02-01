const asynchandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).
        catch((err) => next(err))
    }
}

export { asynchandler }

// const asynchandler = () => {}
// const asynchandler = (func) => () => {}
// const asynchandler = (func) => async () => {}

// const asynchandler = (func) => async (req, res, negatedExtglob) => {
//     try {
        
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
        
//     }
// }

