import { MY_EDUCATIONS } from './educations.params';
import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS from './skills.params';
import {
	Platform,
	type HomePageParams,
	type ProjectPageParams,
	type ExperiencePageParams,
	type SkillsPageParams,
	type ResumePageParams,
	type SearchPageParams,
	type EducationPageParams
} from './types';
import { Icons } from './utils';

export const TITLE_SUFFIX = 'Aman Bukkapatnam';

export const NavBar = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experiences',
	resume: 'Resume',
	skills: 'Skills',
	Education: 'Education'
};

export const getPlatfromIcon = (platform: Platform): Icons => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		case Platform.Kaggle:
			return Icons.Kaggle;
		case Platform.Email:
			return Icons.Email;
	}
};

export const HOME: HomePageParams = {
	title: 'Home',
	name: 'Aman',
	lastName: 'Bukkapatnam',
	description: 'Data Scientist',
	links: [
		{ platform: Platform.GitHub, link: 'https://github.com/amansaikrishna' },
		{
			platform: Platform.Linkedin,
			link: 'https://www.linkedin.com/amansaikrishna'
		},
		{
			platform: Platform.Kaggle,
			link: 'https://kaggle.com/amansaikrishna'
		},
		{
			platform: Platform.Email,
			link: 'amansaikrishnab@gmail.com'
		}
	]
};

export const PROJECTS: ProjectPageParams = {
	title: 'Projects',
	items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'Experiences',
	items: MY_EXPERIENCES
};

export const SKILLS: SkillsPageParams = {
	title: 'Skills',
	items: MY_SKILLS
};

export const RESUME: ResumePageParams = {
	title: 'Resumé',
	item: ''
};

export const SEARCH: SearchPageParams = {
	title: 'Search'
};

export const EDUCATION: EducationPageParams = {
	items: MY_EDUCATIONS,
	title: 'Education'
};
