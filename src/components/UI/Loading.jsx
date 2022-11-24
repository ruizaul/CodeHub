import style from './Loading.module.sass';

import { useNecoBot } from '../../context/NecoBot_context';

import { Momentum } from '@uiball/loaders';

export const Loading = () => {
  const {
    state: { loading },
  } = useNecoBot();

  if (!loading) {
    return null;
  }

  return (
    <div className={style.backdrop}>
      <div className={style.wrap}>
        <div className={style.ring}>
          <Momentum size={200} color='#39c9b5' />
        </div>
      </div>
    </div>
  );
};
