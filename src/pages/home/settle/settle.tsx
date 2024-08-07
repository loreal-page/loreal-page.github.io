import { PlusOutlined } from '@ant-design/icons';
import { Flex } from 'antd';
import './settle.less';
export const Settle = (props) => {
  const { skuList } = props;
  return (
    <div className="settle">
      <div className="header-warning">
        请注意，内购订单付款后将不允许取消订单
      </div>
      <div className="delivery-address">
        <div className="title">收货地址</div>
        <Flex className="add-btn" justify="center" align="center" vertical>
          <div>
            <PlusOutlined className="add-icon" />
          </div>
          <div className="h-[10px] leading-[10px]">添加新地址</div>
        </Flex>
      </div>
      <div className="skus-details">
        <div className="title">商品明细</div>
      </div>
    </div>
  );
};
