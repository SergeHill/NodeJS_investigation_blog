/****** Script for SelectTopNRows command from SSMS  ******/
select P.[PostID] as postId, 
	   P.[Title] as postTitle, 
	   P.[Date] as postCreationDate,
	   PD.[PostBody] as postContent,
	   PD.[PostDetailID] as postDetailId,
	   U1.[Name] as postAuthor,
	   C.[commentContent] as postCommentContent, 
	   C.[Date] as postCommentCreationDate, 
	   C.[CommentOwnerID] as postCommentAuthorId,
	   U2.[Name] as postCommentAuthor,
	   AVG(R1.[Rate]) as postRate,
	   (SELECT Rates.[Rate] FROM Rates WHERE Rates.[PostID] = P.[PostID] and Rates.[UserID] = 4) as currentUsersRate

from	(Posts P join PostDetails PD on P.[postId] = PD.[PostID]
				join Users U1 on P.[ownerId] = U1.[UserID]
				join Comments C on PD.[PostDetailID] = C.[PostDetailID] 
				left join Users U2 on C.[CommentOwnerID] = U2.[UserID]
				left join Rates R1 on P.[PostID] = R1.[PostID]) 
				GROUP BY P.[PostID],P.[Title],P.[Date], PD.[PostBody], PD.[PostDetailID], U1.[Name], C.[commentContent], C.[Date], C.[CommentOwnerID], U2.[Name]
