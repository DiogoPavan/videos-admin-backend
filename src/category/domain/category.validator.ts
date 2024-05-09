import { MaxLength, IsString, IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';
import { Category } from './category.entity';
import { ClassValidatorFields } from '../../shared/domain/validators/class-validator-fields';
// import { Notification } from '../../shared/domain/validators/notification';

export class CategoryRules {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description: string | null;

  @IsBoolean()
  @IsNotEmpty()
  is_active: boolean;

  constructor(entity: Category) {
    this.name = entity.name;
    this.description = entity.description;
    this.is_active = entity.is_active;
  }
}

export class CategoryValidator extends ClassValidatorFields<CategoryRules> {
  validate(data: any): boolean {
    return super.validate(new CategoryRules(data));
  }
}

export class CategoryValidatorFactory {
  static create() {
    return new CategoryValidator();
  }
}
