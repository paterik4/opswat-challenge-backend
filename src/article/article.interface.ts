import { UserData } from '../user/user.interface';
import { ArticleEntity } from './article.entity';
import { Comment } from './comment.entity';

interface ArticleData {
	slug: string;
	title: string;
	description: string;
	body?: string;
	tagList?: string[];
	createdAt?: number;
	updatedAt?: number;
	favorited?: boolean;
	favoritesCount?: number;
	author?: UserData;
}

export interface CommentsRO {
	comments: Comment[];
}

export interface ArticleRO {
	article: ArticleEntity;
}

export interface ArticlesRO {
	articles: ArticleEntity[];
	articlesCount: number;
}

