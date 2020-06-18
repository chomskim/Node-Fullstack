import { DocumentNode, DefinitionNode } from "graphql/language/ast";
export declare function removeDuplicateFragments(document: DocumentNode): void;
export declare function removeSourceLocations(document: DefinitionNode | DocumentNode): void;
export declare function removeUnusedFragments(document: DocumentNode): void;
