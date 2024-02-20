import { TestExecExecutorSchema } from './schema';

export default async function runExecutor(options: TestExecExecutorSchema) {
  console.log('Executor ran for TestExec', options);
  return {
    success: true,
  };
}
