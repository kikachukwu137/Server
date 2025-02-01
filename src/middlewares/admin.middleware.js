export const isAdmin = (req,res,next) => {
    try {
        if(req?.user?.role !== "ADMIN"){
           return  res.status(403).json({message: "Forbidden "})
        }
        next()
        
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"})

    }

}

//note if you dont put return  restriction will fail
