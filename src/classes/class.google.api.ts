const docs = require('@googleapis/docs')

console.log(docs)

export interface IAdapter {}

export interface IDoc {}

abstract class Doc implements IDoc {}

export class GoogleDoc extends Doc {}

abstract class Adapter implements IAdapter {}

export class GoogleAdapter extends Adapter {}
