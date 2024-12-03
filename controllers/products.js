const getAllProducts=async (req,res) => {
res.status(200).json(
    {
        msg:"Hey i am getAllProducts",
        id: 1
    }
);

}

const getAllProductsTesting=async (req,res) => {
res.status(200).json({msg:"Hey i am getAllProductsTesting"});

}

module.exports={getAllProducts,getAllProductsTesting};

