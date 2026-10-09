type NumberDict = {[k:string]:number}// not tight there can be n number of k types

const counters:NumberDict = {}

counters['likes'] = 1
counters['comments'] = 10
counters['shares'] = 100
// Record is a keyword
type metrices = Record<'likes'|'views'|'shares',number> //tight there are only 3 possibilities
const mm : metrices = {likes:1,views:2,shares:1}

type UserRole = 'admin' | 'user' | 'guest';

const rolePermissions: Record<UserRole, { canDelete: boolean; canEdit: boolean }> = {
  admin: { canDelete: true, canEdit: true },
  user: { canDelete: false, canEdit: true },
  guest: { canDelete: false, canEdit: false }
};


const priceMap = new Map<string,number>();
priceMap.set('likes',100)

type LooseMap = Record<string,number|undefined>;

const lm:LooseMap = {
    "x":undefined
}
lm['y']=100
