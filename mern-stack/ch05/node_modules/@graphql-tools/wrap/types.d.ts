import { GraphQLSchema, GraphQLFieldResolver, BuildSchemaOptions, GraphQLFieldConfig, FieldNode, FragmentDefinitionNode, SelectionNode } from 'graphql';
import { Executor, Subscriber } from '@graphql-tools/delegate';
export interface IMakeRemoteExecutableSchemaOptions {
    schema: GraphQLSchema | string;
    executor?: Executor;
    subscriber?: Subscriber;
    createResolver?: (executor: Executor, subscriber: Subscriber) => GraphQLFieldResolver<any, any>;
    buildSchemaOptions?: BuildSchemaOptions;
}
export declare type FieldTransformer = (typeName: string, fieldName: string, fieldConfig: GraphQLFieldConfig<any, any>) => GraphQLFieldConfig<any, any> | [string, GraphQLFieldConfig<any, any>] | null | undefined;
export declare type RootFieldTransformer = (operation: 'Query' | 'Mutation' | 'Subscription', fieldName: string, fieldConfig: GraphQLFieldConfig<any, any>) => GraphQLFieldConfig<any, any> | [string, GraphQLFieldConfig<any, any>] | null | undefined;
export declare type FieldNodeTransformer = (typeName: string, fieldName: string, fieldNode: FieldNode, fragments: Record<string, FragmentDefinitionNode>) => SelectionNode | Array<SelectionNode>;
