interface Rewards {
  // root is the merkle root of the merkle tree
  root: string
  // leaderboard contains the breakdown of the rewards earned by each user for each epoch
  leaderboard: EpochData[]
  // userRewards contains the lifetime rewards a user has earned since the start of the rewards program
  userRewards: UsersReward
  // merkleData is used to contstruct the merkle tree
  merkleData: [[ string, string ]]

}

interface EpochData {
  epoch: number
  // twap is the value of swth used to determine the amount of prize pool for the epoch
  twap: number
  // prizePool is the amount of swth that will be distributed to users for the epoch
  prizePool: number
  rewards: LeaderBoard[]
}

interface LeaderBoard {
  address: string
  rewards: number
  points: number
  hexAddress: string
}

interface UsersReward {
  [address: string]: {
    hexAddress: string
    amount: string
  }
}