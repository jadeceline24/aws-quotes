import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerThoughts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Thoughts, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly author?: string | null;
  readonly text?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyThoughts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Thoughts, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly author?: string | null;
  readonly text?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Thoughts = LazyLoading extends LazyLoadingDisabled ? EagerThoughts : LazyThoughts

export declare const Thoughts: (new (init: ModelInit<Thoughts>) => Thoughts) & {
  copyOf(source: Thoughts, mutator: (draft: MutableModel<Thoughts>) => MutableModel<Thoughts> | void): Thoughts;
}