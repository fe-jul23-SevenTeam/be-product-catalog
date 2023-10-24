import fs from 'fs/promises';
import path from 'path';
import PhonesInfoServices from '../../services/phonesInfo.services';
import { PhoneInfo } from '../../types';

export async function addPhonesToDb() {
	const filePath = path.resolve('src/DBconnection/setup', 'phones.json');
	const promiseData = await fs.readFile(filePath);
	const data = JSON.parse(promiseData.toString());

	await data.forEach((phone: PhoneInfo) => {
		const phoneCopy = { ...phone };
		delete phoneCopy.id;

		PhonesInfoServices.add(phoneCopy);
	});
}
