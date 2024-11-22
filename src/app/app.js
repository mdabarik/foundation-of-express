"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// parser
app.use(express_1.default.json());
app.use(express_1.default.text());
// router
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use('/api/v1/users', userRouter);
app.use('/api/v1/courses', courseRouter);
userRouter.post('/create-user', (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: 'User is created successfully',
        data: user
    });
});
courseRouter.post('/create-course', (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: 'User is created successfully',
        data: course
    });
});
const logger = (req, res, next) => {
    console.log(req.method, req.url, req.hostname);
    next();
};
app.get("/", logger, (req, res, next) => {
    try {
        res.send(something);
    }
    catch (err) {
        console.log(err);
        next(err);
        // res.status(400).json({
        //     success: false,
        //     message: 'failed to get data'
        // })
    }
    console.log(req.query);
});
app.get("/hi/:userId/:subid", logger, (req, res) => {
    console.log(req.params);
});
app.post('/', (req, res) => {
    console.log(req.body);
    res.json({
        message: "successfully received data"
    });
    res.send("got data");
});
// 
app.all("*", (req, res) => {
    res.status(400).json({
        success: false,
        message: "Route is not found"
    });
});
// global error handler
app.use((error, req, res, next) => {
    if (error) {
        res.status(400).json({
            success: false,
            message: "something went wrong.."
        });
    }
    console.log(error);
});
exports.default = app;
