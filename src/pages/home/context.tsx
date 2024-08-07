import { createContext, useState } from 'react';

export const TotalAmountContext = createContext<{
  totalAmount: string;
  LDtotalAmount: string;
  updateTotalAmount(val: string): void;
  updateLDTotalAmount(val: string): void;
  CPDtotalAmount: string;
  updateCPDTotalAmount(val: string): void;
  orderTotalAmount: string;
  updateOrderTotalAmount(val: string): void;
  orderQuantity: string;
  updateOrderQuantity(val: string): void;
}>();

// 创建Provider组件
export const TotalAmountContextProvider = ({ children }) => {
  // 创建状态和更新函数
  const [totalAmount, setTotalAmount] = useState('0');

  /** 订单总额度 */
  const [orderTotalAmount, setOrderTotalAmount] = useState('15000');

  // LD 金额
  const [LDtotalAmount, setLDtotalAmount] = useState('10000');

  // CPD 金额
  const [CPDtotalAmount, setCPDtotalAmount] = useState('0');

  // 订单数
  const [orderQuantity, setOrderQuantity] = useState('0');

  // 更新订单数
  const updateOrderQuantity = (newValue: string) => {
    setOrderQuantity(newValue);
  };

  // 更新LD额度
  const updateLDTotalAmount = (newValue: string) => {
    setLDtotalAmount(newValue);
  };

  // 更新order总额度
  const updateOrderTotalAmount = (newValue: string) => {
    setOrderTotalAmount(newValue);
  };
  // 更新CPD额度
  const updateCPDTotalAmount = (newValue: string) => {
    setCPDtotalAmount(newValue);
  };

  // 更新总额度函数
  const updateTotalAmount = (newValue: string) => {
    setTotalAmount(newValue);
  };

  // 将状态和更新函数作为value传递
  return (
    <TotalAmountContext.Provider
      value={{
        totalAmount,
        LDtotalAmount,
        updateTotalAmount,
        updateLDTotalAmount,
        CPDtotalAmount,
        updateCPDTotalAmount,
        orderTotalAmount,
        updateOrderTotalAmount,
        orderQuantity,
        updateOrderQuantity,
      }}
    >
      {children}
    </TotalAmountContext.Provider>
  );
};
