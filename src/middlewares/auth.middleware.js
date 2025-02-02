export const generateMiddleware = (schema) => {
    return (req,res,next) => {
        if(!schema){
            return next()
        }
        const {error,value} = schema.validate(req.body,{aboutEarly: false})
        //Uses abortEarly: false to return all validation errors, not just the first one.
        if(error){
            return res.status(400)
                .json({
                    message: "validation error",
                    // errors:error.details.map((err)=> err.message)
                })
        }
        req.validateBody = value
        next()


    }
}