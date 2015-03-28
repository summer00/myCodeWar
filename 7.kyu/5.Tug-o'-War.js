/**
 *   比较两个队伍的能力值大小
 *   @param  {Array}   teams 队伍
 *   @return {String}        表明谁赢了
 *   @create 2015-03-28
 *   @update 2015-03-28
 */
function tug_o_war(teams) {
	var sum = 0;
	l = teams[0].length;
	for (var i = 0; i < l; i++) {
		sum += teams[0][i] - teams[1][i];
	}
	if (sum != 0) {
		return sum > 0 ? "Team 1 wins!" : "Team 2 wins!";
	} else {
		var t1 = teams[0][0],
			t2 = teams[1][l - 1];
		if (t1 == t2) {
			return "It's a tie!"
		} else {
			return t1 > t2 ? "Team 1 wins!" : "Team 2 wins!"
		}
	}
}

function tug_o_war(teams) {
	function sum(arr) {
		return arr.reduce(function(s, e) {
			return s + e
		});
	}
	var res, s1 = sum(teams[0]),
		s2 = sum(teams[1]);
	if (s1 === s2) {
		res = teams[0][0] === teams[1][4] ? 0 : teams[0][0] > teams[1][4] ? 1 : 2;
	} else res = s1 > s2 ? 1 : 2;
	return ["It's a tie!", "Team 1 wins!", "Team 2 wins!"][res];
}

console.log(tug_o_war(
	[
		[1, 2, 3, 4, 5],
		[5, 4, 3, 2, 1]
	]
));
/*
Description:

In this Kata we will play a classic game of Tug-o'-War!

Two teams of 5 members will face off, the strongest of which will prevail. Each team member will be assigned a strength rating (1-9), with the most powerful members having a rating of 9. Your goal is to determine, based on the cumulative strength of the members of each team, which team will win the war.

The teams will be represented by an array of arrays:

[[5,0,3,2,1], [1,6,8,2,9]]  // 11 < 26 ; "Team 2 wins!"
If team one is stronger, return the string "Team 1 wins!" If team two is stronger, return the string "Team 2 wins!"

If the two teams are of equal strength, the team with the strongest Anchor (the member furthest from the center of the rope) will win. In the above example, the member with strength 5 is team one's Anchor and strength 9 is team two's Anchor. If the teams and the Anchors are both of equal strength, return the string "It's a tie!"

more examples:

[[1,2,3,4,5], [1,2,3,4,5]] // Team 2 has stronger Anchor ; "Team 2 wins!"
[[1,2,3,4,5], [5,4,3,2,1]] // Teams & Anchors are tied; "It's a tie!"
 */