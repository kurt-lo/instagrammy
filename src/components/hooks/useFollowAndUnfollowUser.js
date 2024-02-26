import { useEffect, useState } from "react";
import useUserStore from "../../store/useUserStore";
import { firestore } from "../../firebase/index";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";

const useFollowAndUnfollowUser = (userId) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isFollowing, setIsFollowing] = useState(false);
	const userLoggedIn = useUserStore((state) => state.user);
	const setUserLoggedIn = useUserStore((state) => state.setUser);
	const userProfile = useUserStore((state) => state.userProfile);
	const setUserProfile = useUserStore((state) => state.setUserProfile);

	const handleFollowAndUnfollowUser = async () => {
		setIsLoading(true);
		try {
			const currentUserRef = doc(firestore, "users", userLoggedIn.uid);
			const userToFollowOrUnfollorRef = doc(firestore, "users", userId);
			await updateDoc(currentUserRef, {
				following: isFollowing ? arrayRemove(userId) : arrayUnion(userId),
			});

			await updateDoc(userToFollowOrUnfollorRef, {
				followers: isFollowing ? arrayRemove(userLoggedIn.uid) : arrayUnion(userLoggedIn.uid),
			});

			if (isFollowing) {
				// unfollow
				setUserLoggedIn({
					...userLoggedIn,
					following: userLoggedIn.following.filter((uid) => uid !== userId),
				});
				if (userProfile) {
					setUserProfile({
						...userProfile,
						followers: userProfile.followers.filter((uid) => uid !== userLoggedIn.uid),
					});
				}

				localStorage.setItem(
					"user-info-ig-clone",
					JSON.stringify({
						...userLoggedIn,
						following: userLoggedIn.following.filter((uid) => uid !== userId),
					})
				);
				setIsFollowing(false);
			} else {
				// follow
				setUserLoggedIn({
					...userLoggedIn,
					following: [...userLoggedIn.following, userId],
				});

				if (userProfile) {
					setUserProfile({
						...userProfile,
						followers: [...userProfile.followers, userLoggedIn.uid],
					});
				}

				localStorage.setItem(
					"user-info-ig-clone",
					JSON.stringify({
						...userLoggedIn,
						following: [...userLoggedIn.following, userId],
					})
				);
				setIsFollowing(true);
			}
		} catch (error) {
			console.log(error.message)
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if (userLoggedIn) {
			const isFollowing = userLoggedIn.following.includes(userId);
			setIsFollowing(isFollowing);
		}
	}, [userLoggedIn, userId]);

	return { isLoading, isFollowing, handleFollowAndUnfollowUser };
};

export default useFollowAndUnfollowUser;
