import library1Variable from '@mhal007/monorepo-yarn-library-1'
import library2Variable from '@mhal007/monorepo-yarn-library-2'

console.log('library-1 variable value is ' + library1Variable)
console.log('library-2 variable value is ' + library2Variable)

console.log('Hello World from application-2');

const changeThisToTriggerNewVersion = 1;

export default changeThisToTriggerNewVersion
