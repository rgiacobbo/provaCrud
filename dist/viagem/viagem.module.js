"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViagemModule = void 0;
const common_1 = require("@nestjs/common");
const viagem_controller_1 = require("./viagem.controller");
const viagem_service_1 = require("./viagem.service");
const viagem_1 = require("../db/entity/viagem");
const typeorm_1 = require("@nestjs/typeorm");
let ViagemModule = class ViagemModule {
};
exports.ViagemModule = ViagemModule;
exports.ViagemModule = ViagemModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([viagem_1.ViagemEntity])],
        controllers: [viagem_controller_1.ViagemController],
        providers: [viagem_service_1.ViagemService]
    })
], ViagemModule);
//# sourceMappingURL=viagem.module.js.map