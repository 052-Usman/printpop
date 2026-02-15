import { PhoneModel } from '@/types/phone';

export const PHONE_MODELS: PhoneModel[] = [
  {
    id: 'iphone-17-pro',
    name: 'iphone-17-pro',
    displayName: 'iPhone 17 Pro',
    image: '/iphone 17 pro.png',
    canvasWidth: 320,
    canvasHeight: 720,
    safeArea: {
      left: 0,
      top: 0,
      width: 320,
      height: 720,
      rx: 50, // 50px border radius
      ry: 50,
    },
    price: 35.0,
  },
  // More models can be added here or fetched from API
];

export const getPhoneModelById = (id: string): PhoneModel | undefined => {
  return PHONE_MODELS.find((model) => model.id === id);
};
