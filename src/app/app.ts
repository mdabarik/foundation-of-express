
import express, { NextFunction, Request, Response } from "express";
const app = express();
const port = 3000;

// parser
app.use(express.json());
app.use(express.text());

// router
const userRouter = express.Router();
const courseRouter = express.Router();

app.use('/api/v1/users', userRouter);
app.use('/api/v1/courses', courseRouter);

userRouter.post('/create-user', (req: Request, res: Response) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: 'User is created successfully',
        data: user
    })
})

courseRouter.post('/create-course', (req: Request, res: Response) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: 'User is created successfully',
        data: course
    })
})

const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.method, req.url, req.hostname);

    next();
}


app.get("/", logger, (req: Request, res: Response, next: NextFunction) => {
    try {
        res.send(something);
    } catch (err) {
        console.log(err);
        next(err);
        // res.status(400).json({
        //     success: false,
        //     message: 'failed to get data'
        // })
    }
    console.log(req.query);
})

app.get("/hi/:userId/:subid", logger, (req: Request, res: Response) => {
    console.log(req.params);
})

app.post('/', (req: Request, res: Response) => {
    console.log(req.body);
    res.json({
        message: "successfully received data"
    });
    res.send("got data");
})

// 
app.all("*", (req: Request, res: Response) => {
    res.status(400).json({
        success: false,
        message: "Route is not found"
    })
})

// global error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    if (error) {
        res.status(400).json({
            success: false,
            message: "something went wrong.."
        })
    }
    console.log(error);
})

export default app;