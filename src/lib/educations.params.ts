import Assets from './data/assets';
import type { Education } from './types';

export const MY_EDUCATIONS: Array<Education> = [
	{
		degree: 'Bachelor degree of Industrial Computing',
		description: '',
		location: 'Borj Cédria, Tunisia',
		logo: Assets.Unknown,
		name: '',
		organization: 'ISTIC',
		period: { from: new Date(2017, 8, 15), to: new Date(2020, 6, 19) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['Algorithm', 'C', 'C++', 'HTML', 'CSS', 'Javascript']
	}
];
