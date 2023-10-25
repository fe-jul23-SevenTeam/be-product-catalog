import { PhoneInfo } from '../types';

const HOST = process.env.SERVER_HOST;

export const normalizePhoneInfo = (phone: PhoneInfo): PhoneInfo => {
	const normalizedPhone = { ...phone };

	delete normalizedPhone.createdAt;
	delete normalizedPhone.updatedAt;
	normalizedPhone.image = `${HOST}/images/${normalizedPhone.image}`;

	return normalizedPhone;
};
