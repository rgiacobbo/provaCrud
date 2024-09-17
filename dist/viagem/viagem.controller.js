"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViagemController = void 0;
const common_1 = require("@nestjs/common");
const viagem_service_1 = require("./viagem.service");
const viagem_dto_1 = require("./viagem.dto");
let ViagemController = class ViagemController {
    constructor(viagemService) {
        this.viagemService = viagemService;
    }
    async create(viagemDto) {
        try {
            const viagem = await this.viagemService.create(viagemDto);
            if (!viagem) {
                throw new common_1.BadRequestException();
            }
            return viagem;
        }
        catch (error) {
            throw new common_1.BadRequestException('Erro ao buscar id viagem');
        }
    }
    findAll() {
        return this.viagemService.findAll();
    }
    async findOne(id) {
        try {
            const viagem = await this.viagemService.findOne(id);
            if (!viagem) {
                throw new common_1.NotFoundException();
            }
            return viagem;
        }
        catch (error) {
            throw new common_1.NotFoundException('Erro ao buscar id viagem');
        }
    }
    async update(id, viagemDto) {
        try {
            const viagem = await this.viagemService.update(id, viagemDto);
            if (!viagem) {
                throw new common_1.NotFoundException();
            }
            return viagem;
        }
        catch (error) {
            throw new common_1.NotFoundException('Erro ao buscar id viagem');
        }
    }
    async remove(id) {
        try {
            const viagem = await this.viagemService.remove(id);
            if (!viagem) {
                throw new common_1.NotFoundException();
            }
            return 'OK';
        }
        catch (error) {
            throw new common_1.NotFoundException('Erro ao buscar id viagem');
        }
    }
};
exports.ViagemController = ViagemController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [viagem_dto_1.ViagemDto]),
    __metadata("design:returntype", Promise)
], ViagemController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ViagemController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ViagemController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, viagem_dto_1.ViagemDto]),
    __metadata("design:returntype", Promise)
], ViagemController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ViagemController.prototype, "remove", null);
exports.ViagemController = ViagemController = __decorate([
    (0, common_1.Controller)('viagem'),
    __metadata("design:paramtypes", [viagem_service_1.ViagemService])
], ViagemController);
//# sourceMappingURL=viagem.controller.js.map