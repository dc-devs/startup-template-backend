interface ITwitterProfileEntitiesDescriptionUrl {
	start: number;
	end: number;
	url: string;
	expanded_url: string;
	display_url: string;
}

interface ITwitterProfileEntitiesDescription {
	urls: ITwitterProfileEntitiesDescriptionUrl[];
}

interface ITwitterProfileEntities {
	description: ITwitterProfileEntitiesDescription;
}

interface ITwitterProfilePublicMetrics {
	followers_count: number;
	following_count: number;
	tweet_count: number;
	listed_count: number;
	like_count: number;
}

interface ITwitterProfile {
	location: string;
	pinned_tweet_id: string;
	id: string;
	protected: false;
	username: string;
	name: string;
	created_at: string;
	profile_image_url: string;
	public_metrics: ITwitterProfilePublicMetrics;
	description: string;
	verified: false;
	entities: ITwitterProfileEntities;
}

export { ITwitterProfile };
