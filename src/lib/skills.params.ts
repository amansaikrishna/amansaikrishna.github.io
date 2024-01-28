import Assets from './data/assets';
import type { Skill } from './types';

import js_md from '$lib/md/skills/js.md?raw';
import ts_md from '$lib/md/skills/ts.md?raw';
import dart_md from '$lib/md/skills/dart.md?raw';
import kt_md from '$lib/md/skills/kt.md?raw';
import go_md from '$lib/md/skills/go.md?raw';
import java_md from '$lib/md/skills/java.md?raw';
import csharp_md from '$lib/md/skills/csharp.md?raw';
import py_md from '$lib/md/skills/py.md?raw';
import react_md from '$lib/md/skills/react.md?raw';
import svelte_md from '$lib/md/skills/svelte.md?raw';
import vue_md from '$lib/md/skills/vue.md?raw';
import nuxt_md from '$lib/md/skills/nuxt.md?raw';
import electron_md from '$lib/md/skills/electron.md?raw';
import flutter_md from '$lib/md/skills/flutter.md?raw';
import angular_md from '$lib/md/skills/angular.md?raw';
import xamarin_md from '$lib/md/skills/xamarin.md?raw';
import node_md from '$lib/md/skills/node.md?raw';
import deno_md from '$lib/md/skills/deno.md?raw';
import numpy_md from '$lib/md/skills/numpy.md?raw';
import pandas_md from '$lib/md/skills/pandas.md?raw';
import matplotlib_md from '$lib/md/skills/matplotlib.md?raw';
import scikit_md from '$lib/md/skills/scikit.md?raw';
import seaborn_md from '$lib/md/skills/seaborn.md?raw';
import tensorflow_md from '$lib/md/skills/tensorflow.md?raw';
import pytorch_md from '$lib/md/skills/pytorch.md?raw';
import nltk_md from '$lib/md/skills/nltk.md?raw';
import powerbi_md from '$lib/md/skills/powerbi.md?raw';
import mysql_md from '$lib/md/skills/mysql.md?raw';
import postgresql_md from '$lib/md/skills/postgresql.md?raw';
import tableau_md from '$lib/md/skills/tableau.md?raw';
import mongodb_md from '$lib/md/skills/mongodb.md?raw';
import git_md from '$lib/md/skills/git.md?raw';
import c_md from '$lib/md/skills/c.md?raw';
import html_md from '$lib/md/skills/html.md?raw';
import css_md from '$lib/md/skills/css.md?raw';


const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	// LANGUAGES
	s({
		slug: 'py',
		color: 'yellow',
		description: py_md,
		logo: Assets.Python,
		name: 'Python'
	}),
	s({
		slug: 'numpy',
		color: 'blue',
		description: numpy_md,
		logo: Assets.Numpy,
		name: 'Numpy'
	}),
	s({ slug: 'pandas', color: 'black', description: pandas_md, logo: Assets.Pandas, name: 'Pandas' }),
	s({ slug: 'matplotlib', color: 'blue', description: matplotlib_md, logo: Assets.Matplotlib, name: 'Matplotlib' }),
	s({ slug: 'seaborn', color: 'skyblue', description: seaborn_md, logo: Assets.Seaborn, name: 'Seaborn' }),
	s({ slug: 'scikit', color: 'orange', description: scikit_md, logo: Assets.Scikit, name: 'Scikit-Learn' }),
	s({
		slug: 'tensorflow',
		color: 'orange',
		description: tensorflow_md,
		logo: Assets.Tensorflow,
		name: 'Tensorflow'
	}),
	s({
		slug: 'pytorch',
		color: 'red',
		description: pytorch_md,
		logo: Assets.Pytorch,
		name: 'PyTorch'
	}),
	s({
		slug: 'nltk',
		color: 'darkblue',
		description: nltk_md,
		logo: Assets.nltk,
		name: 'NLTK'
	}),
	s({
		slug: 'powerbi',
		color: 'yellow',
		description: powerbi_md,
		logo: Assets.PowerBI,
		name: 'Power BI'
	}),
	s({ slug: 'tableau', color: 'orange', description: tableau_md, logo: Assets.Tableau, name: 'Tableau' }),
	s({
		slug: 'mysql',
		color: 'skyblue',
		description: mysql_md,
		logo: Assets.MySQL,
		name: 'MySQL'
	}),
	s({ slug: 'postgres', color: 'cornflowerblue', description: postgresql_md, logo: Assets.PostgreSQL, name: 'PostgreSQL' }),
	s({
		slug: 'mongo',
		color: 'purple',
		description: mongodb_md,
		logo: Assets.MongoDB,
		name: 'MongoDB'
	}),
	s({
		slug: 'C',
		color: 'darkblue',
		description: c_md,
		logo: Assets.C,
		name: 'C'
	}),
	s({
		slug: 'java',
		color: 'red',
		description: java_md,
		logo: Assets.Java,
		name: 'Java'
	}),


	s({ slug: 'htm', color: 'darkorange', description: html_md, logo: Assets.HTML, name: 'HTML' }),
	s({
		slug: 'cs',
		color: 'darkblue',
		description: css_md,
		logo: Assets.CSS,
		name: 'CSS'
	}),

	s({
		slug: 'fastify',
		color: 'fastify',
		description: '',
		logo: Assets.Fastify,
		name: 'Fastify'
	}),
	s({
		slug: 'express',
		color: 'white',
		description: '',
		logo: Assets.ExpressJs,
		name: 'Express JS'
	}),

	// DATABASES
	s({
		slug: 'postgresql',
		color: 'blue',
		description: '',
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL'
	}),
	s({
		slug: 'firebase',
		color: 'orange',
		description: '',
		logo: Assets.Firebase,
		name: 'Firebase'
	}),
	s({
		slug: 'mongodb',
		color: 'green',
		description: '',
		logo: Assets.MongoDB,
		name: 'MongoDB'
	}),
	s({
		slug: 'redis',
		color: 'red',
		description: '',
		logo: Assets.Redis,
		name: 'Redis'
	}),

	// DEVOPS
	s({
		slug: 'docker',
		color: 'blue',
		description: '',
		logo: Assets.Docker,
		name: 'Docker'
	}),
	s({
		slug: 'kubernetes',
		color: 'purple',
		description: '',
		logo: Assets.Kubernetes,
		name: 'Kubernetes'
	}),

	// TOOLS & TESTING
	s({
		slug: 'vite',
		color: 'purple',
		description: '',
		logo: Assets.Vite,
		name: 'Vite'
	}),
	s({
		slug: 'vitest',
		color: 'green',
		description: '',
		logo: Assets.Vitest,
		name: 'Vitest'
	}),
	s({
		slug: 'jest',
		color: 'green',
		description: '',
		logo: Assets.Jest,
		name: 'Jest'
	}),

	// MARKUP & STYLING
	s({
		slug: 'css',
		color: 'blue',
		description: '',
		logo: Assets.CSS,
		name: 'CSS'
	}),
	s({
		slug: 'html',
		color: 'orange',
		description: '',
		logo: Assets.HTML,
		name: 'HTML'
	}),
	s({
		slug: 'postcss',
		color: 'red',
		description: '',
		logo: Assets.Postcss,
		name: 'PostCSS'
	}),
	s({
		slug: 'unocss',
		color: 'gray',
		description: '',
		logo: 'https://unocss.dev/logo.svg',
		name: 'UnoCSS'
	}),
	s({
		slug: 'sass',
		color: 'pink',
		description: '',
		logo: Assets.Sass,
		name: 'Sass'
	}),
	s({
		slug: 'tailwind',
		color: 'cyan',
		description: '',
		logo: Assets.Tailwind,
		name: 'Tailwind'
	}),

	// DESIGN

	s({
		slug: 'ps',
		color: 'cyan',
		description: '',
		logo: Assets.Photoshop,
		name: 'Adobe Photoshop'
	}),
	s({
		slug: 'ae',
		color: 'purple',
		description: '',
		logo: Assets.AfterEffects,
		name: 'Adobe After Effects'
	}),
	s({
		slug: 'pp',
		color: 'pink',
		description: '',
		logo: Assets.Premiere,
		name: 'Adobe Premiere'
	}),
	s({
		slug: 'ai',
		color: 'orange',
		description: '',
		logo: Assets.Illustrator,
		name: 'Adobe Illustrator'
	})
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
