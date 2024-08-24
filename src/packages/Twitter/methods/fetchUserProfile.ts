import axios from 'axios';
import { convertToModel } from '../common/utils/convertToModel';

interface IOptions {
	username: string;
	bearerToken: string;
}

const fetchUserProfile = async ({
	username,
	bearerToken,
}: IOptions): Promise<Record<string, unknown> | null> => {
	const url = `https://api.x.com/2/users/by?usernames=${username}&user.fields=id,created_at,description,entities,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,withheld`;
	const response = await axios(url, {
		headers: {
			Authorization: `Bearer ${bearerToken}`,
		},
	});
	const { data } = response;
	const { data: users } = data;
	const profile = users[0];
	const twitterProfile = convertToModel({ twitterProfile: profile });

	return twitterProfile;
};

export { fetchUserProfile };
