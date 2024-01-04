import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  property1: process.env.PROPERTY_1,
  property2: parseInt(process.env.PROPERTY_2, 10) || 1000,
  property3: process.env.PROPERTY_3 == 'true',
}));
