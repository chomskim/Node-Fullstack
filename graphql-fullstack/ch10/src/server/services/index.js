import graphql from './graphql';
import subscriptions from './subscriptions';

module.exports = utils => ({
  graphql: graphql(utils),
  subscriptions: subscriptions(utils),
});
