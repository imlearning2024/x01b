import jwt from "jsonwebtoken";

export const generateToken = (user, expiresIn, secret = process.env.JWT_SECRET) => {
   return jwt.sign({ id: user._id }, secret, { expiresIn });
};


export const generateAccessToken = async (user) => {
    const accessToken = generateToken(user, "30m");
    return { accessToken };
};

