"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EmailService_1 = __importDefault(require("../services/EmailService"));
const users = [
    { name: 'Gabriel', email: 'gabriellopes7@yahoo.com.br' }
];
exports.default = {
    async index(req, res) {
        return res.json(users);
    },
    async create(req, res) {
        const emailService = new EmailService_1.default();
        emailService.sendMail({
            to: {
                name: 'Gabriel Ladeira',
                email: 'gabriellopes7@yahoo.com.br'
            },
            message: {
                subject: 'Bem vindo ao Sistema',
                body: 'Seja bem vindo'
            }
        });
        return res.send();
    }
};
