import { Flex } from 'antd';
import { useContext } from 'react';
import { TotalAmountContext } from '../context';

export const QuotaHeader = () => {
  const { orderQuantity, orderTotalAmount, LDtotalAmount } =
    useContext(TotalAmountContext);

  return (
    <Flex
      className="limit bg-[#fff7ea]  h-[42px]"
      align="center"
      justify="center"
    >
      <div className="w-[200px]">{`总额度剩余：${orderTotalAmount}`}</div>
      <div className="w-[200px]">{`LD额度剩余：${LDtotalAmount}`}</div>
      <div className="w-[200px]">{`订单数：${orderQuantity}/10`}</div>
    </Flex>
  );
};
