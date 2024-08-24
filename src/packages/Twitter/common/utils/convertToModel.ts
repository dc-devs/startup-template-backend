import { ITwitterProfile } from '../interfaces';
import { getPlatformFromUrl } from './getPlatformFromUrl';

interface IOptions {
	twitterProfile: ITwitterProfile;
}

const convertToModel = ({ twitterProfile }: IOptions) => {
	const {
		id: profileId,
		name,
		username,
		description,
		location,
		profile_image_url: imageUrl,
		created_at: profileCreatedAt,
		pinned_tweet_id: pinnedTweetId,
		protected: isProtected,
		verified: isVerified,
		public_metrics,
		entities,
	} = twitterProfile;
	const {
		followers_count: followersCount,
		following_count: followingCount,
		tweet_count: tweetCount,
		listed_count: listedCount,
		like_count: likeCount,
	} = public_metrics;
	const { description: entityDescription } = entities;
	const { urls: descriptionUrls } = entityDescription;

	const model: Record<string, any> = {
		profileId,
		name,
		username,
		location,
		description,
		imageUrl,
		profileCreatedAt,
		pinnedTweetId,
		isProtected,
		isVerified,
		followersCount,
		followingCount,
		tweetCount,
		listedCount,
		likeCount,
		urls: [],
	};

	if (Array.isArray(descriptionUrls) && descriptionUrls.length > 0) {
		descriptionUrls.forEach((url) => {
			const { expanded_url } = url;

			if (expanded_url) {
				const platform = getPlatformFromUrl({ url: expanded_url });

				model.urls.push({
					platform,
					url: expanded_url,
					location: 'description',
				});
			}
		});
	}

	if (imageUrl) {
		const updatedUrl = imageUrl.replace('_normal.jpg', '_400x400.jpg');
		model.imageUrl = updatedUrl;
	}

	return model;
};

export { convertToModel };
